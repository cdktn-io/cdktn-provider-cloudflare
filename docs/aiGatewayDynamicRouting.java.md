# `aiGatewayDynamicRouting` Submodule <a name="`aiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayDynamicRouting <a name="AiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRouting;

AiGatewayDynamicRouting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .elements(IResolvable|java.util.List<AiGatewayDynamicRoutingElements>)
    .gatewayId(java.lang.String)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.elements"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements">putElements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements"></a>

```java
public void putElements(IResolvable|java.util.List<AiGatewayDynamicRoutingElements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRouting;

AiGatewayDynamicRouting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRouting;

AiGatewayDynamicRouting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRouting;

AiGatewayDynamicRouting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRouting;

AiGatewayDynamicRouting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiGatewayDynamicRouting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiGatewayDynamicRouting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route">route</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success">success</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput">elementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment"></a>

```java
public AiGatewayDynamicRoutingDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements"></a>

```java
public AiGatewayDynamicRoutingElementsList getElements();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route"></a>

```java
public AiGatewayDynamicRoutingRouteOutputReference getRoute();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success"></a>

```java
public IResolvable getSuccess();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version"></a>

```java
public AiGatewayDynamicRoutingVersionOutputReference getVersion();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput"></a>

```java
public IResolvable|java.util.List<AiGatewayDynamicRoutingElements> getElementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayDynamicRoutingConfig <a name="AiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingConfig;

AiGatewayDynamicRoutingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .elements(IResolvable|java.util.List<AiGatewayDynamicRoutingElements>)
    .gatewayId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements"></a>

```java
public IResolvable|java.util.List<AiGatewayDynamicRoutingElements> getElements();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

### AiGatewayDynamicRoutingDeployment <a name="AiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingDeployment;

AiGatewayDynamicRoutingDeployment.builder()
    .build();
```


### AiGatewayDynamicRoutingElements <a name="AiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElements;

AiGatewayDynamicRoutingElements.builder()
    .id(java.lang.String)
    .outputs(AiGatewayDynamicRoutingElementsOutputs)
    .type(java.lang.String)
//  .properties(AiGatewayDynamicRoutingElementsProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "start", "conditional", "percentage", "rate", "model", "end". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs"></a>

```java
public AiGatewayDynamicRoutingElementsOutputs getOutputs();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "start", "conditional", "percentage", "rate", "model", "end".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties"></a>

```java
public AiGatewayDynamicRoutingElementsProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}.

---

### AiGatewayDynamicRoutingElementsOutputs <a name="AiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputs;

AiGatewayDynamicRoutingElementsOutputs.builder()
//  .elementId(java.lang.String)
//  .fallback(AiGatewayDynamicRoutingElementsOutputsFallback)
//  .false(AiGatewayDynamicRoutingElementsOutputsFalse)
//  .next(AiGatewayDynamicRoutingElementsOutputsNext)
//  .success(AiGatewayDynamicRoutingElementsOutputsSuccess)
//  .true(AiGatewayDynamicRoutingElementsOutputsTrue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}. |

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsFallback getFallback();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}.

---

##### `false`<sup>Optional</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsFalse getFalse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsNext getNext();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}.

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsSuccess getSuccess();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}.

---

##### `true`<sup>Optional</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsTrue getTrue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}.

---

### AiGatewayDynamicRoutingElementsOutputsFallback <a name="AiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsFallback;

AiGatewayDynamicRoutingElementsOutputsFallback.builder()
    .elementId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsFalse <a name="AiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsFalse;

AiGatewayDynamicRoutingElementsOutputsFalse.builder()
    .elementId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsNext <a name="AiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsNext;

AiGatewayDynamicRoutingElementsOutputsNext.builder()
    .elementId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsSuccess <a name="AiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsSuccess;

AiGatewayDynamicRoutingElementsOutputsSuccess.builder()
    .elementId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsTrue <a name="AiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsTrue;

AiGatewayDynamicRoutingElementsOutputsTrue.builder()
    .elementId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId">elementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsProperties <a name="AiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsProperties;

AiGatewayDynamicRoutingElementsProperties.builder()
//  .aiGatewayDynamicRoutingProvider(java.lang.String)
//  .conditions(java.lang.String)
//  .key(java.lang.String)
//  .limit(java.lang.Number)
//  .limitType(java.lang.String)
//  .model(java.lang.String)
//  .retries(java.lang.Number)
//  .timeout(java.lang.Number)
//  .window(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions">conditions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType">limitType</a></code> | <code>java.lang.String</code> | Available values: "count", "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window">window</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}. |

---

##### `aiGatewayDynamicRoutingProvider`<sup>Optional</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider"></a>

```java
public java.lang.String getAiGatewayDynamicRoutingProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions"></a>

```java
public java.lang.String getConditions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}.

---

##### `limitType`<sup>Optional</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

Available values: "count", "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}.

---

### AiGatewayDynamicRoutingRoute <a name="AiGatewayDynamicRoutingRoute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRoute;

AiGatewayDynamicRoutingRoute.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteDeployment <a name="AiGatewayDynamicRoutingRouteDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteDeployment;

AiGatewayDynamicRoutingRouteDeployment.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElements <a name="AiGatewayDynamicRoutingRouteElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElements;

AiGatewayDynamicRoutingRouteElements.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputs <a name="AiGatewayDynamicRoutingRouteElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputs;

AiGatewayDynamicRoutingRouteElementsOutputs.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputsFallback <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsFallback;

AiGatewayDynamicRoutingRouteElementsOutputsFallback.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputsFalse <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsFalse;

AiGatewayDynamicRoutingRouteElementsOutputsFalse.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputsNext <a name="AiGatewayDynamicRoutingRouteElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsNext;

AiGatewayDynamicRoutingRouteElementsOutputsNext.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputsSuccess <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsSuccess;

AiGatewayDynamicRoutingRouteElementsOutputsSuccess.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsOutputsTrue <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsTrue;

AiGatewayDynamicRoutingRouteElementsOutputsTrue.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteElementsProperties <a name="AiGatewayDynamicRoutingRouteElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsProperties;

AiGatewayDynamicRoutingRouteElementsProperties.builder()
    .build();
```


### AiGatewayDynamicRoutingRouteVersion <a name="AiGatewayDynamicRoutingRouteVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteVersion;

AiGatewayDynamicRoutingRouteVersion.builder()
    .build();
```


### AiGatewayDynamicRoutingVersion <a name="AiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingVersion;

AiGatewayDynamicRoutingVersion.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDynamicRoutingDeploymentOutputReference <a name="AiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingDeploymentOutputReference;

new AiGatewayDynamicRoutingDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a>

---


### AiGatewayDynamicRoutingElementsList <a name="AiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsList;

new AiGatewayDynamicRoutingElementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get"></a>

```java
public AiGatewayDynamicRoutingElementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayDynamicRoutingElements> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>>

---


### AiGatewayDynamicRoutingElementsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputReference;

new AiGatewayDynamicRoutingElementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs"></a>

```java
public void putOutputs(AiGatewayDynamicRoutingElementsOutputs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties"></a>

```java
public void putProperties(AiGatewayDynamicRoutingElementsProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsOutputReference getOutputs();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```java
public AiGatewayDynamicRoutingElementsPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputs getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsProperties getPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>

---


### AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;

new AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFallback getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference;

new AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFalse getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsNextOutputReference;

new AiGatewayDynamicRoutingElementsOutputsNextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsNext getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsOutputReference;

new AiGatewayDynamicRoutingElementsOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback">putFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse">putFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext">putNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess">putSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue">putTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId">resetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse">resetFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext">resetNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess">resetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue">resetTrue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFallback` <a name="putFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback"></a>

```java
public void putFallback(AiGatewayDynamicRoutingElementsOutputsFallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `putFalse` <a name="putFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse"></a>

```java
public void putFalse(AiGatewayDynamicRoutingElementsOutputsFalse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `putNext` <a name="putNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext"></a>

```java
public void putNext(AiGatewayDynamicRoutingElementsOutputsNext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `putSuccess` <a name="putSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess"></a>

```java
public void putSuccess(AiGatewayDynamicRoutingElementsOutputsSuccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `putTrue` <a name="putTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue"></a>

```java
public void putTrue(AiGatewayDynamicRoutingElementsOutputsTrue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId"></a>

```java
public void resetElementId()
```

##### `resetFallback` <a name="resetFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback"></a>

```java
public void resetFallback()
```

##### `resetFalse` <a name="resetFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse"></a>

```java
public void resetFalse()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext"></a>

```java
public void resetNext()
```

##### `resetSuccess` <a name="resetSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess"></a>

```java
public void resetSuccess()
```

##### `resetTrue` <a name="resetTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue"></a>

```java
public void resetTrue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput">fallbackInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput">falseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput">nextInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput">successInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput">trueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference getFallback();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsFalseOutputReference getFalse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsNextOutputReference getNext();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference getSuccess();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```java
public AiGatewayDynamicRoutingElementsOutputsTrueOutputReference getTrue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFallback getFallbackInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `falseInput`<sup>Optional</sup> <a name="falseInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFalse getFalseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsNext getNextInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `successInput`<sup>Optional</sup> <a name="successInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsSuccess getSuccessInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `trueInput`<sup>Optional</sup> <a name="trueInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsTrue getTrueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---


### AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;

new AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsSuccess getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference;

new AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput"></a>

```java
public java.lang.String getElementIdInput();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsOutputsTrue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingElementsPropertiesOutputReference;

new AiGatewayDynamicRoutingElementsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider">resetAiGatewayDynamicRoutingProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType">resetLimitType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAiGatewayDynamicRoutingProvider` <a name="resetAiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider"></a>

```java
public void resetAiGatewayDynamicRoutingProvider()
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetLimitType` <a name="resetLimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType"></a>

```java
public void resetLimitType()
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetRetries` <a name="resetRetries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWindow` <a name="resetWindow" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow"></a>

```java
public void resetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput">aiGatewayDynamicRoutingProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput">limitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput">windowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">window</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiGatewayDynamicRoutingProviderInput`<sup>Optional</sup> <a name="aiGatewayDynamicRoutingProviderInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput"></a>

```java
public java.lang.String getAiGatewayDynamicRoutingProviderInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput"></a>

```java
public java.lang.String getConditionsInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput"></a>

```java
public java.lang.String getLimitTypeInput();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput"></a>

```java
public java.lang.Number getWindowInput();
```

- *Type:* java.lang.Number

---

##### `aiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```java
public java.lang.String getAiGatewayDynamicRoutingProvider();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```java
public java.lang.String getConditions();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDynamicRoutingElementsProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteDeploymentOutputReference <a name="AiGatewayDynamicRoutingRouteDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteDeploymentOutputReference;

new AiGatewayDynamicRoutingRouteDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a>

---


### AiGatewayDynamicRoutingRouteElementsList <a name="AiGatewayDynamicRoutingRouteElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsList;

new AiGatewayDynamicRoutingRouteElementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiGatewayDynamicRoutingRouteElementsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsOutputReference getOutputs();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties"></a>

```java
public AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsFallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsFalse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsNext getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference getFallback();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference getFalse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference getNext();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference getSuccess();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference getTrue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsSuccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference;

new AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId">elementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId"></a>

```java
public java.lang.String getElementId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsOutputsTrue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference;

new AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window">window</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```java
public java.lang.String getAiGatewayDynamicRoutingProvider();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions"></a>

```java
public java.lang.String getConditions();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteElementsProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteOutputReference <a name="AiGatewayDynamicRoutingRouteOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteOutputReference;

new AiGatewayDynamicRoutingRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag">accountTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag"></a>

```java
public java.lang.String getAccountTag();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment"></a>

```java
public AiGatewayDynamicRoutingRouteDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements"></a>

```java
public AiGatewayDynamicRoutingRouteElementsList getElements();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version"></a>

```java
public AiGatewayDynamicRoutingRouteVersionOutputReference getVersion();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRoute getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a>

---


### AiGatewayDynamicRoutingRouteVersionOutputReference <a name="AiGatewayDynamicRoutingRouteVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingRouteVersionOutputReference;

new AiGatewayDynamicRoutingRouteVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid">isValid</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid"></a>

```java
public IResolvable getIsValid();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingRouteVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a>

---


### AiGatewayDynamicRoutingVersionOutputReference <a name="AiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway_dynamic_routing.AiGatewayDynamicRoutingVersionOutputReference;

new AiGatewayDynamicRoutingVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid">isValid</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```java
public IResolvable getIsValid();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```java
public AiGatewayDynamicRoutingVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a>

---



