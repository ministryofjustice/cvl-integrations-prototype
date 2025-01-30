//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// MVP1

router.post('/are-you-sure-answer', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp1/probation-practitioner/who-with")
    } else {
        response.redirect("/mvp1/probation-practitioner/case-list")
    }
})


router.post('/additional-conditions-answer', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp1/probation-practitioner/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp1/probation-practitioner/check-licence")
    }
})


// MVP2


router.post('/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/who-with")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/case-list")
    }
})

// Curfew hours

router.post('/standard-curfew-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/additional-conditions")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/same-each-day")
    }
})

router.post('/same-each-day-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-same")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-diff")
    }
})



// Licence conditions

router.post('/additional-conditions-answer2', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-additional-conditions")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer2', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/create-bespoke-condition")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence")
    }
})


// Edit routing


router.post('/are-you-sure-edit-answer', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/check-licence-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/case-list")
    }
})


router.post('/same-each-day-edit-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/enter-curfew-same")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/enter-curfew-diff")
    }
})


// Vary routing

router.post('/are-you-sure-vary-answer', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/case-list-view")
    }
})



router.post('/address-type-answer', function(request, response) {

    var addType = request.session.data['addressType']
    if (addType == "res"){
        response.redirect("/mvp2/probation-practitioner/post-release/address-checks")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/enter-new-address")
    }
})