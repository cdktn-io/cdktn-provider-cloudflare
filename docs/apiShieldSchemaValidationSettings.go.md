# `apiShieldSchemaValidationSettings` Submodule <a name="`apiShieldSchemaValidationSettings` Submodule" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldSchemaValidationSettings <a name="ApiShieldSchemaValidationSettings" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

apishieldschemavalidationsettings.NewApiShieldSchemaValidationSettings(scope Construct, id *string, config ApiShieldSchemaValidationSettingsConfig) ApiShieldSchemaValidationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig">ApiShieldSchemaValidationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig">ApiShieldSchemaValidationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction">ResetValidationOverrideMitigationAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetValidationOverrideMitigationAction` <a name="ResetValidationOverrideMitigationAction" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction"></a>

```go
func ResetValidationOverrideMitigationAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

apishieldschemavalidationsettings.ApiShieldSchemaValidationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

apishieldschemavalidationsettings.ApiShieldSchemaValidationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

apishieldschemavalidationsettings.ApiShieldSchemaValidationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

apishieldschemavalidationsettings.ApiShieldSchemaValidationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiShieldSchemaValidationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput">ValidationDefaultMitigationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput">ValidationOverrideMitigationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction">ValidationDefaultMitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction">ValidationOverrideMitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ValidationDefaultMitigationActionInput`<sup>Optional</sup> <a name="ValidationDefaultMitigationActionInput" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput"></a>

```go
func ValidationDefaultMitigationActionInput() *string
```

- *Type:* *string

---

##### `ValidationOverrideMitigationActionInput`<sup>Optional</sup> <a name="ValidationOverrideMitigationActionInput" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput"></a>

```go
func ValidationOverrideMitigationActionInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ValidationDefaultMitigationAction`<sup>Required</sup> <a name="ValidationDefaultMitigationAction" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction"></a>

```go
func ValidationDefaultMitigationAction() *string
```

- *Type:* *string

---

##### `ValidationOverrideMitigationAction`<sup>Required</sup> <a name="ValidationOverrideMitigationAction" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction"></a>

```go
func ValidationOverrideMitigationAction() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldSchemaValidationSettingsConfig <a name="ApiShieldSchemaValidationSettingsConfig" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschemavalidationsettings"

&apishieldschemavalidationsettings.ApiShieldSchemaValidationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ValidationDefaultMitigationAction: *string,
	ZoneId: *string,
	ValidationOverrideMitigationAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction">ValidationDefaultMitigationAction</a></code> | <code>*string</code> | The default mitigation action used when there is no mitigation action defined on the operation. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction">ValidationOverrideMitigationAction</a></code> | <code>*string</code> | When set, this overrides both zone level and operation level mitigation actions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ValidationDefaultMitigationAction`<sup>Required</sup> <a name="ValidationDefaultMitigationAction" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction"></a>

```go
ValidationDefaultMitigationAction *string
```

- *Type:* *string

The default mitigation action used when there is no mitigation action defined on the operation.

Mitigation actions are as follows:

* `log` - log request when request does not conform to schema
* `block` - deny access to the site when request does not conform to schema

A special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation
Available values: "none", "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}

---

##### `ValidationOverrideMitigationAction`<sup>Optional</sup> <a name="ValidationOverrideMitigationAction" id="@cdktn/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction"></a>

```go
ValidationOverrideMitigationAction *string
```

- *Type:* *string

When set, this overrides both zone level and operation level mitigation actions.

* `none` will skip running schema validation entirely for the request

  * `null` indicates that no override is in place

To clear any override, use the special value `disable_override` or `null`
Available values: "none", "disable_override".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}

---



