# `dataCloudflareZeroTrustCwsTenantStructureNode` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNode <a name="DataCloudflareZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNode(Construct Scope, string Id, DataCloudflareZeroTrustCwsTenantStructureNodeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig">DataCloudflareZeroTrustCwsTenantStructureNodeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig">DataCloudflareZeroTrustCwsTenantStructureNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId">ResetNodeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustCwsTenantStructureNodeFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetNodeId` <a name="ResetNodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId"></a>

```csharp
private void ResetNodeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNode.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNode.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNode.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsTenantStructureNode.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNode to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId">NativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind">NodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput">NodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput">StructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId">StructureId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NativeId`<sup>Required</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```csharp
public string NativeId { get; }
```

- *Type:* string

---

##### `NodeKind`<sup>Required</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```csharp
public string NodeKind { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsTenantStructureNodeFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput"></a>

```csharp
public string NodeIdInput { get; }
```

- *Type:* string

---

##### `StructureIdInput`<sup>Optional</sup> <a name="StructureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```csharp
public string StructureIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `StructureId`<sup>Required</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId"></a>

```csharp
public string StructureId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string StructureId,
    DataCloudflareZeroTrustCwsTenantStructureNodeFilter Filter = null,
    string NodeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId">StructureId</a></code> | <code>string</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId">NodeId</a></code> | <code>string</code> | ID of the node to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}

---

##### `StructureId`<sup>Required</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```csharp
public string StructureId { get; set; }
```

- *Type:* string

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsTenantStructureNodeFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}.

---

##### `NodeId`<sup>Optional</sup> <a name="NodeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId"></a>

```csharp
public string NodeId { get; set; }
```

- *Type:* string

ID of the node to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}

---

### DataCloudflareZeroTrustCwsTenantStructureNodeFilter <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodeFilter {
    string Direction = null,
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name">Name</a></code> | <code>string</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId">NativeId</a></code> | <code>string</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind">NodeKind</a></code> | <code>string</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent">Parent</a></code> | <code>string</code> | Filter by exact parent native ID. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#direction DataCloudflareZeroTrustCwsTenantStructureNode#direction}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#name DataCloudflareZeroTrustCwsTenantStructureNode#name}

---

##### `NativeId`<sup>Optional</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId"></a>

```csharp
public string NativeId { get; set; }
```

- *Type:* string

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#native_id DataCloudflareZeroTrustCwsTenantStructureNode#native_id}

---

##### `NodeKind`<sup>Optional</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind"></a>

```csharp
public string NodeKind { get; set; }
```

- *Type:* string

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_kind DataCloudflareZeroTrustCwsTenantStructureNode#node_kind}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#order DataCloudflareZeroTrustCwsTenantStructureNode#order}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#parent DataCloudflareZeroTrustCwsTenantStructureNode#parent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId">ResetNativeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind">ResetNodeKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNativeId` <a name="ResetNativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId"></a>

```csharp
private void ResetNativeId()
```

##### `ResetNodeKind` <a name="ResetNodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind"></a>

```csharp
private void ResetNodeKind()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent"></a>

```csharp
private void ResetParent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput">NativeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput">NodeKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId">NativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind">NodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NativeIdInput`<sup>Optional</sup> <a name="NativeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput"></a>

```csharp
public string NativeIdInput { get; }
```

- *Type:* string

---

##### `NodeKindInput`<sup>Optional</sup> <a name="NodeKindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput"></a>

```csharp
public string NodeKindInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NativeId`<sup>Required</sup> <a name="NativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId"></a>

```csharp
public string NativeId { get; }
```

- *Type:* string

---

##### `NodeKind`<sup>Required</sup> <a name="NodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind"></a>

```csharp
public string NodeKind { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsTenantStructureNodeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---



