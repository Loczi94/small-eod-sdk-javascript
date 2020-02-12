/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmallEodClient);
  }
}(this, function(expect, SmallEodClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmallEodClient.ModelCase();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ModelCase', function() {
    it('should create an instance of ModelCase', function() {
      // uncomment below and update the code to test ModelCase
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be.a(SmallEodClient.ModelCase);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property feature (base name: "feature")', function() {
      // uncomment below and update the code to test the property feature
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property auditedInstitution (base name: "auditedInstitution")', function() {
      // uncomment below and update the code to test the property auditedInstitution
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property responsibleUser (base name: "responsibleUser")', function() {
      // uncomment below and update the code to test the property responsibleUser
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property notifiedUser (base name: "notifiedUser")', function() {
      // uncomment below and update the code to test the property notifiedUser
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new SmallEodClient.ModelCase();
      //expect(instance).to.be();
    });

  });

}));
