 function updateGMTTime() {
            const now = new Date();
            const options = { 
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'GMT',
                timeZoneName: 'short'
             };
            document.getElementById("utcTime").textContent = new Intl.DateTimeFormat('en-US', options).format(now);
        }
        updateGMTTime();