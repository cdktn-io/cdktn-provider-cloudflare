# `accountDnsSettingsInternalView` Submodule <a name="`accountDnsSettingsInternalView` Submodule" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettingsInternalView <a name="AccountDnsSettingsInternalView" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

accountdnssettingsinternalview.NewAccountDnsSettingsInternalView(scope Construct, id *string, config AccountDnsSettingsInternalViewConfig) AccountDnsSettingsInternalView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig">AccountDnsSettingsInternalViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig">AccountDnsSettingsInternalViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccountDnsSettingsInternalView resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

accountdnssettingsinternalview.AccountDnsSettingsInternalView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

accountdnssettingsinternalview.AccountDnsSettingsInternalView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

accountdnssettingsinternalview.AccountDnsSettingsInternalView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

accountdnssettingsinternalview.AccountDnsSettingsInternalView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AccountDnsSettingsInternalView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountDnsSettingsInternalView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AccountDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.modifiedTime">ModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.modifiedTime"></a>

```go
func ModifiedTime() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsInternalViewConfig <a name="AccountDnsSettingsInternalViewConfig" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/accountdnssettingsinternalview"

&accountdnssettingsinternalview.AccountDnsSettingsInternalViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.name">Name</a></code> | <code>*string</code> | The name of the view. |
| <code><a href="#@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | The list of zones linked to this view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/account_dns_settings_internal_view#account_id AccountDnsSettingsInternalView#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/account_dns_settings_internal_view#name AccountDnsSettingsInternalView#name}

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktn/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

The list of zones linked to this view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/account_dns_settings_internal_view#zones AccountDnsSettingsInternalView#zones}

---



