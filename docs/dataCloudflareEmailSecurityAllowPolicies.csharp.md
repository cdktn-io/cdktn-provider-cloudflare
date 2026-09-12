# `dataCloudflareEmailSecurityAllowPolicies` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicies <a name="DataCloudflareEmailSecurityAllowPolicies" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies cloudflare_email_security_allow_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPolicies(Construct Scope, string Id, DataCloudflareEmailSecurityAllowPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender">ResetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient">ResetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender">ResetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType">ResetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender">ResetVerifySender</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetIsAcceptableSender` <a name="ResetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender"></a>

```csharp
private void ResetIsAcceptableSender()
```

##### `ResetIsExemptRecipient` <a name="ResetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient"></a>

```csharp
private void ResetIsExemptRecipient()
```

##### `ResetIsTrustedSender` <a name="ResetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender"></a>

```csharp
private void ResetIsTrustedSender()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPatternType` <a name="ResetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType"></a>

```csharp
private void ResetPatternType()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetVerifySender` <a name="ResetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender"></a>

```csharp
private void ResetVerifySender()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityAllowPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput">PatternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput">VerifySenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result"></a>

```csharp
public DataCloudflareEmailSecurityAllowPoliciesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput"></a>

```csharp
public bool|IResolvable IsAcceptableSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput"></a>

```csharp
public bool|IResolvable IsExemptRecipientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput"></a>

```csharp
public bool|IResolvable IsTrustedSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput"></a>

```csharp
public string PatternTypeInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput"></a>

```csharp
public bool|IResolvable VerifySenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPoliciesConfig <a name="DataCloudflareEmailSecurityAllowPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Direction = null,
    bool|IResolvable IsAcceptableSender = null,
    bool|IResolvable IsExemptRecipient = null,
    bool|IResolvable IsTrustedSender = null,
    double MaxItems = null,
    string Order = null,
    string Pattern = null,
    string PatternType = null,
    string Search = null,
    bool|IResolvable VerifySender = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction">Direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order">Order</a></code> | <code>string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType">PatternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search">Search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#account_id DataCloudflareEmailSecurityAllowPolicies#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#direction DataCloudflareEmailSecurityAllowPolicies#direction}

---

##### `IsAcceptableSender`<sup>Optional</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicies#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Optional</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicies#is_exempt_recipient}

---

##### `IsTrustedSender`<sup>Optional</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_trusted_sender DataCloudflareEmailSecurityAllowPolicies#is_trusted_sender}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#max_items DataCloudflareEmailSecurityAllowPolicies#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#order DataCloudflareEmailSecurityAllowPolicies#order}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}.

---

##### `PatternType`<sup>Optional</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType"></a>

```csharp
public string PatternType { get; set; }
```

- *Type:* string

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern_type DataCloudflareEmailSecurityAllowPolicies#pattern_type}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#search DataCloudflareEmailSecurityAllowPolicies#search}

---

##### `VerifySender`<sup>Optional</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#verify_sender DataCloudflareEmailSecurityAllowPolicies#verify_sender}

---

### DataCloudflareEmailSecurityAllowPoliciesResult <a name="DataCloudflareEmailSecurityAllowPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPoliciesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPoliciesResultList <a name="DataCloudflareEmailSecurityAllowPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPoliciesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get"></a>

```csharp
private DataCloudflareEmailSecurityAllowPoliciesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareEmailSecurityAllowPoliciesResultOutputReference <a name="DataCloudflareEmailSecurityAllowPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPoliciesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient">IsRecipient</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex">IsRegex</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender">IsSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof">IsSpoof</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender">IsTrustedSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender">VerifySender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender"></a>

```csharp
public IResolvable IsAcceptableSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient"></a>

```csharp
public IResolvable IsExemptRecipient { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient"></a>

```csharp
public IResolvable IsRecipient { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex"></a>

```csharp
public IResolvable IsRegex { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender"></a>

```csharp
public IResolvable IsSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof"></a>

```csharp
public IResolvable IsSpoof { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender"></a>

```csharp
public IResolvable IsTrustedSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender"></a>

```csharp
public IResolvable VerifySender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityAllowPoliciesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a>

---



