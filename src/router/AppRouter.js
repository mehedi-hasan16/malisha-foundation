import {Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import MeetTeam from "../pages/meetTeam/MeetTeam";
import BecomeVolunteer  from '../pages/becomeVolunteer/BecomeVolunteer'
import Faq from "../pages/faq/Faq";
import Causes from "../pages/causes/Causes";
import CausesDetails from "../pages/causesDetails/CausesDetails";
import Donation from "../pages/donation/Donation";
import DonationPayment from "../pages/donationPayment/DonationPayment";
import EventPage from "../pages/eventPage/EventPage";
import EventDetailPage from "../pages/eventDetailsPage/EventDetailPage";
import ContactUsPage from "../pages/contactUsPage/ContactUsPage";
import Error404Page from "../pages/errorPage/Error404Page";



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/meet-team' element={<MeetTeam />} />
            <Route path='/become-volunteer' element={<BecomeVolunteer />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/causes' element={<Causes />} />
            <Route path='/causes-details' element={<CausesDetails />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/donation-payment' element={<DonationPayment />} />
            <Route path='/event-page' element={<EventPage />} />
            <Route path='/event-detail' element={<EventDetailPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='*' element={<Error404Page />} />
        </Routes>
    );
};

export default AppRouter;