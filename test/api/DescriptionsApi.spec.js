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
 * OpenAPI Generator version: 4.3.1-SNAPSHOT
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
    instance = new SmallEodClient.DescriptionsApi();
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

  describe('DescriptionsApi', function() {
    describe('descriptionsCreate', function() {
      it('should call descriptionsCreate successfully', function(done) {
        //uncomment below and update the code to test descriptionsCreate
        //instance.descriptionsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('descriptionsDelete', function() {
      it('should call descriptionsDelete successfully', function(done) {
        //uncomment below and update the code to test descriptionsDelete
        //instance.descriptionsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('descriptionsList', function() {
      it('should call descriptionsList successfully', function(done) {
        //uncomment below and update the code to test descriptionsList
        //instance.descriptionsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('descriptionsPartialUpdate', function() {
      it('should call descriptionsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test descriptionsPartialUpdate
        //instance.descriptionsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('descriptionsRead', function() {
      it('should call descriptionsRead successfully', function(done) {
        //uncomment below and update the code to test descriptionsRead
        //instance.descriptionsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('descriptionsUpdate', function() {
      it('should call descriptionsUpdate successfully', function(done) {
        //uncomment below and update the code to test descriptionsUpdate
        //instance.descriptionsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
