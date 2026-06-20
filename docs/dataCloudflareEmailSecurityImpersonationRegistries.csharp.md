# `dataCloudflareEmailSecurityImpersonationRegistries` Submodule <a name="`dataCloudflareEmailSecurityImpersonationRegistries` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityImpersonationRegistries <a name="DataCloudflareEmailSecurityImpersonationRegistries" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityImpersonationRegistries(Construct Scope, string Id, DataCloudflareEmailSecurityImpersonationRegistriesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig">DataCloudflareEmailSecurityImpersonationRegistriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig">DataCloudflareEmailSecurityImpersonationRegistriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetProvenance">ResetProvenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetProvenance` <a name="ResetProvenance" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetProvenance"></a>

```csharp
private void ResetProvenance()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityImpersonationRegistries.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityImpersonationRegistries.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityImpersonationRegistries.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityImpersonationRegistries.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistries to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityImpersonationRegistries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList">DataCloudflareEmailSecurityImpersonationRegistriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenanceInput">ProvenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenance">Provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.search">Search</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.result"></a>

```csharp
public DataCloudflareEmailSecurityImpersonationRegistriesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList">DataCloudflareEmailSecurityImpersonationRegistriesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ProvenanceInput`<sup>Optional</sup> <a name="ProvenanceInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenanceInput"></a>

```csharp
public string ProvenanceInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Provenance`<sup>Required</sup> <a name="Provenance" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.provenance"></a>

```csharp
public string Provenance { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistries.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityImpersonationRegistriesConfig <a name="DataCloudflareEmailSecurityImpersonationRegistriesConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityImpersonationRegistriesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    string Direction = null,
    double MaxItems = null,
    string Order = null,
    string Provenance = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.direction">Direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.order">Order</a></code> | <code>string</code> | Field to sort by. Available values: "name", "email", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provenance">Provenance</a></code> | <code>string</code> | Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.search">Search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#account_id DataCloudflareEmailSecurityImpersonationRegistries#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#direction DataCloudflareEmailSecurityImpersonationRegistries#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#max_items DataCloudflareEmailSecurityImpersonationRegistries#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by. Available values: "name", "email", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#order DataCloudflareEmailSecurityImpersonationRegistries#order}

---

##### `Provenance`<sup>Optional</sup> <a name="Provenance" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.provenance"></a>

```csharp
public string Provenance { get; set; }
```

- *Type:* string

Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/email_security_impersonation_registries#search DataCloudflareEmailSecurityImpersonationRegistries#search}

---

### DataCloudflareEmailSecurityImpersonationRegistriesResult <a name="DataCloudflareEmailSecurityImpersonationRegistriesResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityImpersonationRegistriesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityImpersonationRegistriesResultList <a name="DataCloudflareEmailSecurityImpersonationRegistriesResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityImpersonationRegistriesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get"></a>

```csharp
private DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference <a name="DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryId">DirectoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryNodeId">DirectoryNodeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.externalDirectoryNodeId">ExternalDirectoryNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.isEmailRegex">IsEmailRegex</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.provenance">Provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult">DataCloudflareEmailSecurityImpersonationRegistriesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryId"></a>

```csharp
public double DirectoryId { get; }
```

- *Type:* double

---

##### `DirectoryNodeId`<sup>Required</sup> <a name="DirectoryNodeId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.directoryNodeId"></a>

```csharp
public double DirectoryNodeId { get; }
```

- *Type:* double

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ExternalDirectoryNodeId`<sup>Required</sup> <a name="ExternalDirectoryNodeId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.externalDirectoryNodeId"></a>

```csharp
public string ExternalDirectoryNodeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEmailRegex`<sup>Required</sup> <a name="IsEmailRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.isEmailRegex"></a>

```csharp
public IResolvable IsEmailRegex { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provenance`<sup>Required</sup> <a name="Provenance" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.provenance"></a>

```csharp
public string Provenance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityImpersonationRegistriesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistries.DataCloudflareEmailSecurityImpersonationRegistriesResult">DataCloudflareEmailSecurityImpersonationRegistriesResult</a>

---



