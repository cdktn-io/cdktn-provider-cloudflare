# `dataCloudflareZeroTrustCwsRegoModule` Submodule <a name="`dataCloudflareZeroTrustCwsRegoModule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsRegoModule <a name="DataCloudflareZeroTrustCwsRegoModule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module cloudflare_zero_trust_cws_rego_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModule(Construct Scope, string Id, DataCloudflareZeroTrustCwsRegoModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig">DataCloudflareZeroTrustCwsRegoModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig">DataCloudflareZeroTrustCwsRegoModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetRegoModuleId">ResetRegoModuleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustCwsRegoModuleFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRegoModuleId` <a name="ResetRegoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetRegoModuleId"></a>

```csharp
private void ResetRegoModuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsRegoModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference">DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoSource">RegoSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleIdInput">RegoModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleId">RegoModuleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference">DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

##### `RegoSource`<sup>Required</sup> <a name="RegoSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoSource"></a>

```csharp
public string RegoSource { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsRegoModuleFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---

##### `RegoModuleIdInput`<sup>Optional</sup> <a name="RegoModuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleIdInput"></a>

```csharp
public string RegoModuleIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RegoModuleId`<sup>Required</sup> <a name="RegoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleId"></a>

```csharp
public string RegoModuleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsRegoModuleConfig <a name="DataCloudflareZeroTrustCwsRegoModuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareZeroTrustCwsRegoModuleFilter Filter = null,
    string RegoModuleId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#filter DataCloudflareZeroTrustCwsRegoModule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.regoModuleId">RegoModuleId</a></code> | <code>string</code> | ID of the Rego module to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#account_id DataCloudflareZeroTrustCwsRegoModule#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsRegoModuleFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#filter DataCloudflareZeroTrustCwsRegoModule#filter}.

---

##### `RegoModuleId`<sup>Optional</sup> <a name="RegoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.regoModuleId"></a>

```csharp
public string RegoModuleId { get; set; }
```

- *Type:* string

ID of the Rego module to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#rego_module_id DataCloudflareZeroTrustCwsRegoModule#rego_module_id}

---

### DataCloudflareZeroTrustCwsRegoModuleFilter <a name="DataCloudflareZeroTrustCwsRegoModuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModuleFilter {
    string Direction = null,
    string Name = null,
    string Order = null,
    string PackagePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.name">Name</a></code> | <code>string</code> | Filter by Rego module name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.packagePath">PackagePath</a></code> | <code>string</code> | Filter by package path (case-sensitive literal substring match). |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#direction DataCloudflareZeroTrustCwsRegoModule#direction}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by Rego module name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#name DataCloudflareZeroTrustCwsRegoModule#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#order DataCloudflareZeroTrustCwsRegoModule#order}

---

##### `PackagePath`<sup>Optional</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.packagePath"></a>

```csharp
public string PackagePath { get; set; }
```

- *Type:* string

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#package_path DataCloudflareZeroTrustCwsRegoModule#package_path}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference <a name="DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetPackagePath">ResetPackagePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPackagePath` <a name="ResetPackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetPackagePath"></a>

```csharp
private void ResetPackagePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePathInput">PackagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PackagePathInput`<sup>Optional</sup> <a name="PackagePathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePathInput"></a>

```csharp
public string PackagePathInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsRegoModuleFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---



