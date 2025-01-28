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


router.post('/additional-conditions-answer2', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer2', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence")
    }
})