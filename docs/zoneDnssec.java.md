# `zoneDnssec` Submodule <a name="`zoneDnssec` Submodule" id="@cdktn/provider-cloudflare.zoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnssec <a name="ZoneDnssec" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec cloudflare_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssec;

ZoneDnssec.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .dnssecMultiSigner(java.lang.Boolean|IResolvable)
//  .dnssecPresigned(java.lang.Boolean|IResolvable)
//  .dnssecUseNsec3(java.lang.Boolean|IResolvable)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecMultiSigner">dnssecMultiSigner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecPresigned">dnssecPresigned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecUseNsec3">dnssecUseNsec3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables the use of NSEC3 together with DNSSEC on the zone. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#zone_id ZoneDnssec#zone_id}

---

##### `dnssecMultiSigner`<sup>Optional</sup> <a name="dnssecMultiSigner" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecMultiSigner"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time.

This is required for DNSKEY records (except those automatically
generated by Cloudflare) to be added to the zone.

See [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_multi_signer ZoneDnssec#dnssec_multi_signer}

---

##### `dnssecPresigned`<sup>Optional</sup> <a name="dnssecPresigned" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecPresigned"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.

Note that this feature has some limitations.
See [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_presigned ZoneDnssec#dnssec_presigned}

---

##### `dnssecUseNsec3`<sup>Optional</sup> <a name="dnssecUseNsec3" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.dnssecUseNsec3"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables the use of NSEC3 together with DNSSEC on the zone.

Combined with setting dnssec_presigned to true, this enables the use of
NSEC3 records when transferring in from an external provider.
If dnssec_presigned is instead set to false (default), NSEC3 records will be
generated and signed at request time.

See [DNSSEC with NSEC3](https://developers.cloudflare.com/dns/dnssec/enable-nsec3/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_use_nsec3 ZoneDnssec#dnssec_use_nsec3}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#status ZoneDnssec#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner">resetDnssecMultiSigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned">resetDnssecPresigned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3">resetDnssecUseNsec3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDnssecMultiSigner` <a name="resetDnssecMultiSigner" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner"></a>

```java
public void resetDnssecMultiSigner()
```

##### `resetDnssecPresigned` <a name="resetDnssecPresigned" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned"></a>

```java
public void resetDnssecPresigned()
```

##### `resetDnssecUseNsec3` <a name="resetDnssecUseNsec3" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3"></a>

```java
public void resetDnssecUseNsec3()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZoneDnssec resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssec;

ZoneDnssec.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssec;

ZoneDnssec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssec;

ZoneDnssec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssec;

ZoneDnssec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZoneDnssec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZoneDnssec resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZoneDnssec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZoneDnssec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZoneDnssec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType">digestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds">ds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags">flags</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput">dnssecMultiSignerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput">dnssecPresignedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input">dnssecUseNsec3Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner">dnssecMultiSigner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned">dnssecPresigned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3">dnssecUseNsec3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType"></a>

```java
public java.lang.String getDigestType();
```

- *Type:* java.lang.String

---

##### `ds`<sup>Required</sup> <a name="ds" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds"></a>

```java
public java.lang.String getDs();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags"></a>

```java
public java.lang.Number getFlags();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `dnssecMultiSignerInput`<sup>Optional</sup> <a name="dnssecMultiSignerInput" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput"></a>

```java
public java.lang.Boolean|IResolvable getDnssecMultiSignerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnssecPresignedInput`<sup>Optional</sup> <a name="dnssecPresignedInput" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput"></a>

```java
public java.lang.Boolean|IResolvable getDnssecPresignedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnssecUseNsec3Input`<sup>Optional</sup> <a name="dnssecUseNsec3Input" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input"></a>

```java
public java.lang.Boolean|IResolvable getDnssecUseNsec3Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `dnssecMultiSigner`<sup>Required</sup> <a name="dnssecMultiSigner" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner"></a>

```java
public java.lang.Boolean|IResolvable getDnssecMultiSigner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnssecPresigned`<sup>Required</sup> <a name="dnssecPresigned" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned"></a>

```java
public java.lang.Boolean|IResolvable getDnssecPresigned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnssecUseNsec3`<sup>Required</sup> <a name="dnssecUseNsec3" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3"></a>

```java
public java.lang.Boolean|IResolvable getDnssecUseNsec3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnssecConfig <a name="ZoneDnssecConfig" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zone_dnssec.ZoneDnssecConfig;

ZoneDnssecConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .dnssecMultiSigner(java.lang.Boolean|IResolvable)
//  .dnssecPresigned(java.lang.Boolean|IResolvable)
//  .dnssecUseNsec3(java.lang.Boolean|IResolvable)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner">dnssecMultiSigner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned">dnssecPresigned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3">dnssecUseNsec3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables the use of NSEC3 together with DNSSEC on the zone. |
| <code><a href="#@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#zone_id ZoneDnssec#zone_id}

---

##### `dnssecMultiSigner`<sup>Optional</sup> <a name="dnssecMultiSigner" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner"></a>

```java
public java.lang.Boolean|IResolvable getDnssecMultiSigner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time.

This is required for DNSKEY records (except those automatically
generated by Cloudflare) to be added to the zone.

See [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_multi_signer ZoneDnssec#dnssec_multi_signer}

---

##### `dnssecPresigned`<sup>Optional</sup> <a name="dnssecPresigned" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned"></a>

```java
public java.lang.Boolean|IResolvable getDnssecPresigned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.

Note that this feature has some limitations.
See [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_presigned ZoneDnssec#dnssec_presigned}

---

##### `dnssecUseNsec3`<sup>Optional</sup> <a name="dnssecUseNsec3" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3"></a>

```java
public java.lang.Boolean|IResolvable getDnssecUseNsec3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables the use of NSEC3 together with DNSSEC on the zone.

Combined with setting dnssec_presigned to true, this enables the use of
NSEC3 records when transferring in from an external provider.
If dnssec_presigned is instead set to false (default), NSEC3 records will be
generated and signed at request time.

See [DNSSEC with NSEC3](https://developers.cloudflare.com/dns/dnssec/enable-nsec3/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#dnssec_use_nsec3 ZoneDnssec#dnssec_use_nsec3}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zone_dnssec#status ZoneDnssec#status}

---



