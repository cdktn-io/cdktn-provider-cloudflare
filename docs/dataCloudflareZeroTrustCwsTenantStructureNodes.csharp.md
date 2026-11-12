# `dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodes <a name="DataCloudflareZeroTrustCwsTenantStructureNodes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes cloudflare_zero_trust_cws_tenant_structure_nodes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodes(Construct Scope, string Id, DataCloudflareZeroTrustCwsTenantStructureNodesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig">DataCloudflareZeroTrustCwsTenantStructureNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig">DataCloudflareZeroTrustCwsTenantStructureNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId">ResetNativeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind">ResetNodeKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNativeId` <a name="ResetNativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId"></a>

```csharp
private void ResetNativeId()
```

##### `ResetNodeKind` <a name="ResetNodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind"></a>

```csharp
private void ResetNodeKind()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent"></a>

```csharp
private void ResetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNodes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNodes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput">NativeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput">NodeKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput">StructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId">NativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind">NodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId">StructureId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result"></a>

```csharp
public DataCloudflareZeroTrustCwsTenantStructureNodesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NativeIdInput`<sup>Optional</sup> <a name="NativeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput"></a>

```csharp
public string NativeIdInput { get; }
```

- *Type:* string

---

##### `NodeKindInput`<sup>Optional</sup> <a name="NodeKindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput"></a>

```csharp
public string NodeKindInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `StructureIdInput`<sup>Optional</sup> <a name="StructureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput"></a>

```csharp
public string StructureIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NativeId`<sup>Required</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId"></a>

```csharp
public string NativeId { get; }
```

- *Type:* string

---

##### `NodeKind`<sup>Required</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind"></a>

```csharp
public string NodeKind { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `StructureId`<sup>Required</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId"></a>

```csharp
public string StructureId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string StructureId,
    string Direction = null,
    double MaxItems = null,
    string Name = null,
    string NativeId = null,
    string NodeKind = null,
    string Order = null,
    string Parent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId">StructureId</a></code> | <code>string</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name">Name</a></code> | <code>string</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId">NativeId</a></code> | <code>string</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind">NodeKind</a></code> | <code>string</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent">Parent</a></code> | <code>string</code> | Filter by exact parent native ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#account_id DataCloudflareZeroTrustCwsTenantStructureNodes#account_id}

---

##### `StructureId`<sup>Required</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId"></a>

```csharp
public string StructureId { get; set; }
```

- *Type:* string

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#structure_id DataCloudflareZeroTrustCwsTenantStructureNodes#structure_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#direction DataCloudflareZeroTrustCwsTenantStructureNodes#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#max_items DataCloudflareZeroTrustCwsTenantStructureNodes#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#name DataCloudflareZeroTrustCwsTenantStructureNodes#name}

---

##### `NativeId`<sup>Optional</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId"></a>

```csharp
public string NativeId { get; set; }
```

- *Type:* string

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#native_id DataCloudflareZeroTrustCwsTenantStructureNodes#native_id}

---

##### `NodeKind`<sup>Optional</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind"></a>

```csharp
public string NodeKind { get; set; }
```

- *Type:* string

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#node_kind DataCloudflareZeroTrustCwsTenantStructureNodes#node_kind}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#order DataCloudflareZeroTrustCwsTenantStructureNodes#order}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#parent DataCloudflareZeroTrustCwsTenantStructureNodes#parent}

---

### DataCloudflareZeroTrustCwsTenantStructureNodesResult <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesResultList <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get"></a>

```csharp
private DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId">NativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind">NodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NativeId`<sup>Required</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId"></a>

```csharp
public string NativeId { get; }
```

- *Type:* string

---

##### `NodeKind`<sup>Required</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind"></a>

```csharp
public string NodeKind { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCwsTenantStructureNodesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a>

---



