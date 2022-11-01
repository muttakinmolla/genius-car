import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white p-32">
                <div>
                    <img src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a herf="#" className="link link-hover">Branding</a>
                    <a herf="#" className="link link-hover">Design</a>
                    <a herf="#" className="link link-hover">Marketing</a>
                    <a herf="#" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a herf="#" className="link link-hover">About us</a>
                    <a herf="#" className="link link-hover">Contact</a>
                    <a herf="#" className="link link-hover">Jobs</a>
                    <a herf="#" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a herf="#" className="link link-hover">Terms of use</a>
                    <a herf="#" className="link link-hover">Privacy policy</a>
                    <a herf="#" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;