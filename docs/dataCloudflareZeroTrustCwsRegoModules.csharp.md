# `dataCloudflareZeroTrustCwsRegoModules` Submodule <a name="`dataCloudflareZeroTrustCwsRegoModules` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsRegoModules <a name="DataCloudflareZeroTrustCwsRegoModules" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules cloudflare_zero_trust_cws_rego_modules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModules(Construct Scope, string Id, DataCloudflareZeroTrustCwsRegoModulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig">DataCloudflareZeroTrustCwsRegoModulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig">DataCloudflareZeroTrustCwsRegoModulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetPackagePath">ResetPackagePath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPackagePath` <a name="ResetPackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.resetPackagePath"></a>

```csharp
private void ResetPackagePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModules resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsRegoModules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModules resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoModules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsRegoModules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoModules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList">DataCloudflareZeroTrustCwsRegoModulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.packagePathInput">PackagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.result"></a>

```csharp
public DataCloudflareZeroTrustCwsRegoModulesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList">DataCloudflareZeroTrustCwsRegoModulesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PackagePathInput`<sup>Optional</sup> <a name="PackagePathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.packagePathInput"></a>

```csharp
public string PackagePathInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsRegoModulesConfig <a name="DataCloudflareZeroTrustCwsRegoModulesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Direction = null,
    double MaxItems = null,
    string Name = null,
    string Order = null,
    string PackagePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.name">Name</a></code> | <code>string</code> | Filter by Rego module name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.packagePath">PackagePath</a></code> | <code>string</code> | Filter by package path (case-sensitive literal substring match). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#account_id DataCloudflareZeroTrustCwsRegoModules#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#direction DataCloudflareZeroTrustCwsRegoModules#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#max_items DataCloudflareZeroTrustCwsRegoModules#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by Rego module name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#name DataCloudflareZeroTrustCwsRegoModules#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#order DataCloudflareZeroTrustCwsRegoModules#order}

---

##### `PackagePath`<sup>Optional</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesConfig.property.packagePath"></a>

```csharp
public string PackagePath { get; set; }
```

- *Type:* string

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_modules#package_path DataCloudflareZeroTrustCwsRegoModules#package_path}

---

### DataCloudflareZeroTrustCwsRegoModulesResult <a name="DataCloudflareZeroTrustCwsRegoModulesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModulesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsRegoModulesResultList <a name="DataCloudflareZeroTrustCwsRegoModulesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModulesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.get"></a>

```csharp
private DataCloudflareZeroTrustCwsRegoModulesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsRegoModulesResultOutputReference <a name="DataCloudflareZeroTrustCwsRegoModulesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsRegoModulesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.regoSource">RegoSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResult">DataCloudflareZeroTrustCwsRegoModulesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

##### `RegoSource`<sup>Required</sup> <a name="RegoSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.regoSource"></a>

```csharp
public string RegoSource { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCwsRegoModulesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModules.DataCloudflareZeroTrustCwsRegoModulesResult">DataCloudflareZeroTrustCwsRegoModulesResult</a>

---



