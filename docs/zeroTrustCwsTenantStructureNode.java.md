# `zeroTrustCwsTenantStructureNode` Submodule <a name="`zeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsTenantStructureNode <a name="ZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNode;

ZeroTrustCwsTenantStructureNode.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .nativeId(java.lang.String)
    .nodeKind(java.lang.String)
    .structureId(java.lang.String)
//  .name(java.lang.String)
//  .parent(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nativeId">nativeId</a></code> | <code>java.lang.String</code> | Cloud-native identifier of this node, unique within the structure; |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | Position in the tree. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Display name (e.g. an OU or account name), mutable. Optional; empty by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Native ID of this node's parent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nativeId"></a>

- *Type:* java.lang.String

Cloud-native identifier of this node, unique within the structure;

the parent-reference target. Shape depends on the structure's application. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeKind"></a>

- *Type:* java.lang.String

Position in the tree.

Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId"></a>

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Display name (e.g. an OU or account name), mutable. Optional; empty by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Native ID of this node's parent.

Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName"></a>

```java
public void resetName()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent"></a>

```java
public void resetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNode;

ZeroTrustCwsTenantStructureNode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNode;

ZeroTrustCwsTenantStructureNode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNode;

ZeroTrustCwsTenantStructureNode.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNode;

ZeroTrustCwsTenantStructureNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustCwsTenantStructureNode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustCwsTenantStructureNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput">nativeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput">nodeKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput">structureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId">structureId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nativeIdInput`<sup>Optional</sup> <a name="nativeIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput"></a>

```java
public java.lang.String getNativeIdInput();
```

- *Type:* java.lang.String

---

##### `nodeKindInput`<sup>Optional</sup> <a name="nodeKindInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput"></a>

```java
public java.lang.String getNodeKindInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `structureIdInput`<sup>Optional</sup> <a name="structureIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```java
public java.lang.String getStructureIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsTenantStructureNodeConfig <a name="ZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_tenant_structure_node.ZeroTrustCwsTenantStructureNodeConfig;

ZeroTrustCwsTenantStructureNodeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .nativeId(java.lang.String)
    .nodeKind(java.lang.String)
    .structureId(java.lang.String)
//  .name(java.lang.String)
//  .parent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | Cloud-native identifier of this node, unique within the structure; |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | Position in the tree. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Display name (e.g. an OU or account name), mutable. Optional; empty by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Native ID of this node's parent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

Cloud-native identifier of this node, unique within the structure;

the parent-reference target. Shape depends on the structure's application. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

Position in the tree.

Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name (e.g. an OU or account name), mutable. Optional; empty by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Native ID of this node's parent.

Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}

---



