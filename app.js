let compressedContent = null;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('compressBtn').addEventListener('click', compressFileUsingZip);
    document.getElementById('downloadBtn').addEventListener('click', downloadCompressedFile);
});

function compressFileUsingZip() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    if (files.length === 0) {
        document.getElementById('status').textContent = 'Bitte wählen Sie eine Datei aus.';
        return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const jszip = new JSZip();
        jszip.file(file.name, event.target.result);

        // Higher compression level
        jszip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 9 } })
            .then(function(content) {
                compressedContent = content;
                const originalSize = file.size;
                const compressedSize = content.size;

                if (compressedSize >= originalSize) {
                    document.getElementById('status').textContent = 'Die Datei wurde nicht signifikant komprimiert oder ist größer geworden. Ursprüngliche Größe: ' + formatBytes(originalSize) + ', Komprimierte Größe: ' + formatBytes(compressedSize);
                } else {
                    document.getElementById('status').textContent = 'Komprimierung erfolgreich! Ursprüngliche Größe: ' + formatBytes(originalSize) + ', Komprimierte Größe: ' + formatBytes(compressedSize);
                    document.getElementById('downloadBtn').disabled = false;
                }
            });
    };

    reader.readAsArrayBuffer(file);
}

function downloadCompressedFile() {
    if (compressedContent) {
        downloadBlob(compressedContent, "compressed.zip", "application/zip");
        document.getElementById('status').textContent = 'Datei heruntergeladen.';
    } else {
        document.getElementById('status').textContent = 'Keine komprimierte Datei zum Herunterladen verfügbar.';
    }
}

function downloadBlob(data, fileName, mimeType) {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
