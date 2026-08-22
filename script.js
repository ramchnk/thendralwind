// ===================================================
// THENDRAL WIND TECH LLP - SCRIPT
// Production & Corporate Configuration
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
    // ===========================
    // MOBILE NAVIGATION
    // ===========================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ===========================
    // TECHNICAL RFQ FORM
    // ===========================
    const rfqForm = document.querySelector('.rfq-form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = rfqForm.querySelector('button[type="submit"]');
            const originalHtml = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Request Received - Our Engineering Team Will Contact You';
            submitBtn.style.backgroundColor = '#059669';

            setTimeout(() => {
                rfqForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHtml;
                submitBtn.style.backgroundColor = '';
            }, 4000);
        });
    }
});

// ===========================
// OFFICIAL ISO DATASET
// ===========================
const officialCertificates = {
    qms: {
        standard: 'ISO 9001:2015',
        systemType: 'Quality Management System',
        company: 'THENDRAL WIND TECH LLP',
        unitAddress: 'UNIT NO. 015, JEYALAKSHMI MILL BACK SIDE, CHELLANDIAMMAN NAGAR, SINGANALLUR / UPPILIPALAYAM, COIMBATORE, TAMIL NADU, 641015, INDIA',
        regAddress: 'D.NO, 80-B NAGAL NAGAR, PONSRINIVASAN NAGAR, ADIANOOTHU, DINDIGUL EAST, DINDIGUL - 624003, INDIA',
        scope: 'MECHANICAL INSPECTION, MAINTENANCE, AND TECHNICAL /MANPOWER SUPPORT FOR WIND TURBINE GEARBOXES AND ROTATING EQUIPMENT',
        certNo: 'THE/QMS/H26/5981',
        initialDate: '07.08.2023',
        issueDate: '07.08.2026',
        surveillance1: '07.07.2027',
        surveillance2: '07.07.2028',
        recertDue: '06.08.2029',
        expiryDate: '06.08.2027',
        accreditationNo: 'CB-MS-2809',
        certBody: 'SAARA MANAGEMENT SYSTEM PRIVATE LIMITED',
        certBodyAddress: 'F-7, Top Floor, Main Road, Kalka Ji, New Delhi-110019, India',
        portalUrl: 'http://www.saaracertification.com'
    },
    ems: {
        standard: 'ISO 14001:2015',
        systemType: 'Environmental Management System',
        company: 'THENDRAL WIND TECH LLP',
        unitAddress: 'UNIT NO. 015, JEYALAKSHMI MILL BACK SIDE, CHELLANDIAMMAN NAGAR, SINGANALLUR / UPPILIPALAYAM, COIMBATORE, TAMIL NADU, 641015, INDIA',
        regAddress: 'D.NO, 80-B NAGAL NAGAR, PONSRINIVASAN NAGAR, ADIANOOTHU, DINDIGUL EAST, DINDIGUL - 624003, INDIA',
        scope: 'MECHANICAL INSPECTION, MAINTENANCE, AND TECHNICAL /MANPOWER SUPPORT FOR WIND TURBINE GEARBOXES AND ROTATING EQUIPMENT',
        certNo: 'THE/EMS/H26/2612',
        initialDate: '07.08.2026',
        issueDate: '07.08.2026',
        surveillance1: '07.07.2027',
        surveillance2: '07.07.2028',
        recertDue: '06.08.2029',
        expiryDate: '06.08.2027',
        accreditationNo: 'CB-MS-2808',
        certBody: 'SAARA MANAGEMENT SYSTEM PRIVATE LIMITED',
        certBodyAddress: 'F-7, Top Floor, Main Road, Kalka Ji, New Delhi-110019, India',
        portalUrl: 'http://www.saaracertification.com'
    },
    ohs: {
        standard: 'ISO 45001:2018',
        systemType: 'Occupational Health and Safety Management System',
        company: 'THENDRAL WIND TECH LLP',
        unitAddress: 'UNIT NO. 015, JEYALAKSHMI MILL BACK SIDE, CHELLANDIAMMAN NAGAR, SINGANALLUR / UPPILIPALAYAM, COIMBATORE, TAMIL NADU, 641015, INDIA',
        regAddress: 'D.NO, 80-B NAGAL NAGAR, PONSRINIVASAN NAGAR, ADIANOOTHU, DINDIGUL EAST, DINDIGUL - 624003, INDIA',
        scope: 'MECHANICAL INSPECTION, MAINTENANCE, AND TECHNICAL /MANPOWER SUPPORT FOR WIND TURBINE GEARBOXES AND ROTATING EQUIPMENT',
        certNo: 'THE/OHS/H26/3932',
        initialDate: '07.08.2026',
        issueDate: '07.08.2026',
        surveillance1: '07.07.2027',
        surveillance2: '07.07.2028',
        recertDue: '06.08.2029',
        expiryDate: '06.08.2027',
        accreditationNo: 'CB-MS-2812',
        certBody: 'SAARA MANAGEMENT SYSTEM PRIVATE LIMITED',
        certBodyAddress: 'F-7, Top Floor, Main Road, Kalka Ji, New Delhi-110019, India',
        portalUrl: 'http://www.saaracertification.com'
    }
};

// ===========================
// CERTIFICATE MODAL
// ===========================
window.openCertModal = function(type) {
    const cert = officialCertificates[type];
    if (!cert) return;

    const modal = document.getElementById('certificateModal');
    const content = document.getElementById('certDocumentContent');
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="cert-frame">
            <div class="cert-doc-header">
                <div class="cert-crest-badge"><i class="fas fa-shield-alt"></i></div>
                <h2 class="cert-doc-title">Certificate of Registration</h2>
                <p class="cert-doc-intro">This is to certify that the <strong>${cert.systemType}</strong> of</p>
                <div class="cert-doc-company">${cert.company}</div>
                <div class="cert-doc-addresses">
                    <p><strong>UNIT ADD.:</strong> ${cert.unitAddress}</p>
                    <p style="margin-top: 4px;"><strong>REGIST. ADD.:</strong> ${cert.regAddress}</p>
                </div>
                <p class="cert-doc-intro">has been successfully assessed & conforms with the following standard:</p>
            </div>

            <div class="cert-doc-standard-box">
                <div class="cert-doc-standard-num">${cert.standard}</div>
                <div class="cert-doc-standard-desc">${cert.systemType}</div>
            </div>

            <div class="cert-doc-scope-box">
                <div class="cert-doc-scope-title"><i class="fas fa-certificate"></i> Scope of Certification</div>
                <div class="cert-doc-scope-text">"${cert.scope}"</div>
            </div>

            <table class="cert-doc-table">
                <tbody>
                    <tr>
                        <td class="c-label">Certificate No.</td>
                        <td class="c-val"><span class="font-mono">${cert.certNo}</span></td>
                    </tr>
                    <tr>
                        <td class="c-label">Initial Registration Date</td>
                        <td class="c-val">${cert.initialDate}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Issue Date</td>
                        <td class="c-val">${cert.issueDate}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Surveillance 1 Audit Date</td>
                        <td class="c-val">${cert.surveillance1}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Surveillance 2 Audit Date</td>
                        <td class="c-val">${cert.surveillance2}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Re-Certification Due Before</td>
                        <td class="c-val">${cert.recertDue}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Date of Expiry</td>
                        <td class="c-val" style="color: #b91c1c;">${cert.expiryDate}</td>
                    </tr>
                    <tr>
                        <td class="c-label">Accreditation Number</td>
                        <td class="c-val">${cert.accreditationNo} (UAF / IAF MLA)</td>
                    </tr>
                </tbody>
            </table>

            <div class="cert-doc-footer">
                <div style="display: flex; gap: 10px;">
                    <div class="cert-accred-box"><i class="fas fa-check-circle" style="color: #0284c7;"></i> UAF Accredited</div>
                    <div class="cert-accred-box"><i class="fas fa-handshake" style="color: #059669;"></i> IAF MLA Signatory</div>
                </div>
                <div>
                    <div class="cert-signature-line"></div>
                    <div class="cert-sign-title">Authorized Signatory / Director</div>
                </div>
            </div>

            <div class="cert-registrar-info">
                <p><strong>Certification Body:</strong> ${cert.certBody}</p>
                <p>${cert.certBodyAddress}</p>
                <p style="margin-top: 6px;">
                    <a href="${cert.portalUrl}" target="_blank" rel="noopener noreferrer" style="color: #0b5cab; font-weight: 700; text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i> Verify Certificate at ${cert.portalUrl}
                    </a>
                </p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

window.closeCertModal = function() {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeCertModal();
    }
});
