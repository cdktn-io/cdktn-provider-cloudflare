# `zeroTrustResourceLibraryApplication` Submodule <a name="`zeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustResourceLibraryApplication <a name="ZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplication;

ZeroTrustResourceLibraryApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .categoryId(java.lang.Number)
    .humanId(java.lang.String)
    .name(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .ipSubnets(java.util.List<java.lang.String>)
//  .portProtocols(java.util.List<java.lang.String>)
//  .supportDomains(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.categoryId">categoryId</a></code> | <code>java.lang.Number</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.humanId">humanId</a></code> | <code>java.lang.String</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.ipSubnets">ipSubnets</a></code> | <code>java.util.List<java.lang.String></code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.portProtocols">portProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.supportDomains">supportDomains</a></code> | <code>java.util.List<java.lang.String></code> | Support domains matched by the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.categoryId"></a>

- *Type:* java.lang.Number

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.humanId"></a>

- *Type:* java.lang.String

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `ipSubnets`<sup>Optional</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.ipSubnets"></a>

- *Type:* java.util.List<java.lang.String>

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `portProtocols`<sup>Optional</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.portProtocols"></a>

- *Type:* java.util.List<java.lang.String>

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `supportDomains`<sup>Optional</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.supportDomains"></a>

- *Type:* java.util.List<java.lang.String>

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets">resetIpSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols">resetPortProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains">resetSupportDomains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetIpSubnets` <a name="resetIpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets"></a>

```java
public void resetIpSubnets()
```

##### `resetPortProtocols` <a name="resetPortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols"></a>

```java
public void resetPortProtocols()
```

##### `resetSupportDomains` <a name="resetSupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains"></a>

```java
public void resetSupportDomains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplication;

ZeroTrustResourceLibraryApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplication;

ZeroTrustResourceLibraryApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplication;

ZeroTrustResourceLibraryApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplication;

ZeroTrustResourceLibraryApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustResourceLibraryApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">applicationConfidenceScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition">applicationScoreComposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource">applicationSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription">applicationTypeDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore">genAiScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported">supported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput">categoryIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput">humanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput">ipSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput">portProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput">supportDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId">categoryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId">humanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets">ipSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols">portProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains">supportDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationConfidenceScore`<sup>Required</sup> <a name="applicationConfidenceScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```java
public java.lang.Number getApplicationConfidenceScore();
```

- *Type:* java.lang.Number

---

##### `applicationScoreComposition`<sup>Required</sup> <a name="applicationScoreComposition" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```java
public java.lang.String getApplicationScoreComposition();
```

- *Type:* java.lang.String

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```java
public java.lang.String getApplicationSource();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `applicationTypeDescription`<sup>Required</sup> <a name="applicationTypeDescription" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```java
public java.lang.String getApplicationTypeDescription();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `genAiScore`<sup>Required</sup> <a name="genAiScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```java
public java.lang.Number getGenAiScore();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `supported`<sup>Required</sup> <a name="supported" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported"></a>

```java
public java.util.List<java.lang.String> getSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput"></a>

```java
public java.lang.Number getCategoryIdInput();
```

- *Type:* java.lang.Number

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `humanIdInput`<sup>Optional</sup> <a name="humanIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput"></a>

```java
public java.lang.String getHumanIdInput();
```

- *Type:* java.lang.String

---

##### `ipSubnetsInput`<sup>Optional</sup> <a name="ipSubnetsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getIpSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portProtocolsInput`<sup>Optional</sup> <a name="portProtocolsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getPortProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportDomainsInput`<sup>Optional</sup> <a name="supportDomainsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSupportDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId"></a>

```java
public java.lang.Number getCategoryId();
```

- *Type:* java.lang.Number

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId"></a>

```java
public java.lang.String getHumanId();
```

- *Type:* java.lang.String

---

##### `ipSubnets`<sup>Required</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```java
public java.util.List<java.lang.String> getIpSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portProtocols`<sup>Required</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```java
public java.util.List<java.lang.String> getPortProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportDomains`<sup>Required</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```java
public java.util.List<java.lang.String> getSupportDomains();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustResourceLibraryApplicationConfig <a name="ZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_resource_library_application.ZeroTrustResourceLibraryApplicationConfig;

ZeroTrustResourceLibraryApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .categoryId(java.lang.Number)
    .humanId(java.lang.String)
    .name(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .ipSubnets(java.util.List<java.lang.String>)
//  .portProtocols(java.util.List<java.lang.String>)
//  .supportDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId">categoryId</a></code> | <code>java.lang.Number</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId">humanId</a></code> | <code>java.lang.String</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets">ipSubnets</a></code> | <code>java.util.List<java.lang.String></code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols">portProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains">supportDomains</a></code> | <code>java.util.List<java.lang.String></code> | Support domains matched by the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId"></a>

```java
public java.lang.Number getCategoryId();
```

- *Type:* java.lang.Number

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId"></a>

```java
public java.lang.String getHumanId();
```

- *Type:* java.lang.String

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `ipSubnets`<sup>Optional</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets"></a>

```java
public java.util.List<java.lang.String> getIpSubnets();
```

- *Type:* java.util.List<java.lang.String>

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `portProtocols`<sup>Optional</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols"></a>

```java
public java.util.List<java.lang.String> getPortProtocols();
```

- *Type:* java.util.List<java.lang.String>

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `supportDomains`<sup>Optional</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains"></a>

```java
public java.util.List<java.lang.String> getSupportDomains();
```

- *Type:* java.util.List<java.lang.String>

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---



