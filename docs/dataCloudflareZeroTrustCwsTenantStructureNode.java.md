# `dataCloudflareZeroTrustCwsTenantStructureNode` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNode <a name="DataCloudflareZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNode;

DataCloudflareZeroTrustCwsTenantStructureNode.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .structureId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCwsTenantStructureNodeFilter)
//  .nodeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeId">nodeId</a></code> | <code>java.lang.String</code> | ID of the node to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId"></a>

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}.

---

##### `nodeId`<sup>Optional</sup> <a name="nodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeId"></a>

- *Type:* java.lang.String

ID of the node to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId">resetNodeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter"></a>

```java
public void putFilter(DataCloudflareZeroTrustCwsTenantStructureNodeFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetNodeId` <a name="resetNodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId"></a>

```java
public void resetNodeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNode;

DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNode;

DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNode;

DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNode;

DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput">nodeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput">structureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId">structureId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter"></a>

```java
public DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsTenantStructureNodeFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput"></a>

```java
public java.lang.String getNodeIdInput();
```

- *Type:* java.lang.String

---

##### `structureIdInput`<sup>Optional</sup> <a name="structureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```java
public java.lang.String getStructureIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNodeConfig;

DataCloudflareZeroTrustCwsTenantStructureNodeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .structureId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCwsTenantStructureNodeFilter)
//  .nodeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | ID of the node to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter"></a>

```java
public DataCloudflareZeroTrustCwsTenantStructureNodeFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}.

---

##### `nodeId`<sup>Optional</sup> <a name="nodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

ID of the node to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}

---

### DataCloudflareZeroTrustCwsTenantStructureNodeFilter <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNodeFilter;

DataCloudflareZeroTrustCwsTenantStructureNodeFilter.builder()
//  .direction(java.lang.String)
//  .name(java.lang.String)
//  .nativeId(java.lang.String)
//  .nodeKind(java.lang.String)
//  .order(java.lang.String)
//  .parent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name">name</a></code> | <code>java.lang.String</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent">parent</a></code> | <code>java.lang.String</code> | Filter by exact parent native ID. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#direction DataCloudflareZeroTrustCwsTenantStructureNode#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#name DataCloudflareZeroTrustCwsTenantStructureNode#name}

---

##### `nativeId`<sup>Optional</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#native_id DataCloudflareZeroTrustCwsTenantStructureNode#native_id}

---

##### `nodeKind`<sup>Optional</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_kind DataCloudflareZeroTrustCwsTenantStructureNode#node_kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#order DataCloudflareZeroTrustCwsTenantStructureNode#order}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#parent DataCloudflareZeroTrustCwsTenantStructureNode#parent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_node.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference;

new DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId">resetNativeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind">resetNodeKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent">resetParent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNativeId` <a name="resetNativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId"></a>

```java
public void resetNativeId()
```

##### `resetNodeKind` <a name="resetNodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind"></a>

```java
public void resetNodeKind()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent"></a>

```java
public void resetParent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput">nativeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput">nodeKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nativeIdInput`<sup>Optional</sup> <a name="nativeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput"></a>

```java
public java.lang.String getNativeIdInput();
```

- *Type:* java.lang.String

---

##### `nodeKindInput`<sup>Optional</sup> <a name="nodeKindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput"></a>

```java
public java.lang.String getNodeKindInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZeroTrustCwsTenantStructureNodeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---



