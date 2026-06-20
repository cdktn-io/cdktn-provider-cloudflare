# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktn/provider-cloudflare.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktn/provider-cloudflare.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client cloudflare_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.NewOauthClient(scope Construct, id *string, config OauthClientConfig) OauthClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins">ResetAllowedCorsOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId">ResetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedCorsOrigins` <a name="ResetAllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins"></a>

```go
func ResetAllowedCorsOrigins()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri"></a>

```go
func ResetClientUri()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri"></a>

```go
func ResetLogoUri()
```

##### `ResetOauthClientId` <a name="ResetOauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId"></a>

```go
func ResetOauthClientId()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri"></a>

```go
func ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris"></a>

```go
func ResetPostLogoutRedirectUris()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri"></a>

```go
func ResetTosUri()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.OauthClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.OauthClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.OauthClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.OauthClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OauthClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification">ClientUriVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret">HasRotatedSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt">PromotedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput">AllowedCorsOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput">ClientUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput">GrantTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput">LogoUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput">PolicyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput">ResponseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput">TosUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins">AllowedCorsOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri">ClientUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri">LogoUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri">PolicyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri">TosUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientUriVerification`<sup>Required</sup> <a name="ClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification"></a>

```go
func ClientUriVerification() OauthClientClientUriVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HasRotatedSecret`<sup>Required</sup> <a name="HasRotatedSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret"></a>

```go
func HasRotatedSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PromotedAt`<sup>Required</sup> <a name="PromotedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt"></a>

```go
func PromotedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedCorsOriginsInput`<sup>Optional</sup> <a name="AllowedCorsOriginsInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput"></a>

```go
func AllowedCorsOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput"></a>

```go
func ClientUriInput() *string
```

- *Type:* *string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput"></a>

```go
func GrantTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput"></a>

```go
func LogoUriInput() *string
```

- *Type:* *string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput"></a>

```go
func PolicyUriInput() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput"></a>

```go
func PostLogoutRedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput"></a>

```go
func ResponseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput"></a>

```go
func TokenEndpointAuthMethodInput() *string
```

- *Type:* *string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput"></a>

```go
func TosUriInput() *string
```

- *Type:* *string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedCorsOrigins`<sup>Required</sup> <a name="AllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins"></a>

```go
func AllowedCorsOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri"></a>

```go
func ClientUri() *string
```

- *Type:* *string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes"></a>

```go
func GrantTypes() *[]*string
```

- *Type:* *[]*string

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri"></a>

```go
func LogoUri() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri"></a>

```go
func PolicyUri() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris"></a>

```go
func PostLogoutRedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes"></a>

```go
func ResponseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod"></a>

```go
func TokenEndpointAuthMethod() *string
```

- *Type:* *string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri"></a>

```go
func TosUri() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientClientUriVerification <a name="OauthClientClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

&oauthclient.OauthClientClientUriVerification {

}
```


### OauthClientConfig <a name="OauthClientConfig" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

&oauthclient.OauthClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ClientName: *string,
	GrantTypes: *[]*string,
	RedirectUris: *[]*string,
	ResponseTypes: *[]*string,
	Scopes: *[]*string,
	TokenEndpointAuthMethod: *string,
	AllowedCorsOrigins: *[]*string,
	ClientUri: *string,
	LogoUri: *string,
	OauthClientId: *string,
	PolicyUri: *string,
	PostLogoutRedirectUris: *[]*string,
	TosUri: *string,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName">ClientName</a></code> | <code>*string</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins">AllowedCorsOrigins</a></code> | <code>*[]*string</code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri">ClientUri</a></code> | <code>*string</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri">LogoUri</a></code> | <code>*string</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri">PolicyUri</a></code> | <code>*string</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri">TosUri</a></code> | <code>*string</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Promote the OAuth client from private to public visibility. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes"></a>

```go
GrantTypes *[]*string
```

- *Type:* *[]*string

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes"></a>

```go
ResponseTypes *[]*string
```

- *Type:* *[]*string

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod"></a>

```go
TokenEndpointAuthMethod *string
```

- *Type:* *string

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `AllowedCorsOrigins`<sup>Optional</sup> <a name="AllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins"></a>

```go
AllowedCorsOrigins *[]*string
```

- *Type:* *[]*string

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri"></a>

```go
ClientUri *string
```

- *Type:* *string

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri"></a>

```go
LogoUri *string
```

- *Type:* *string

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri"></a>

```go
PolicyUri *string
```

- *Type:* *string

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris"></a>

```go
PostLogoutRedirectUris *[]*string
```

- *Type:* *[]*string

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri"></a>

```go
TosUri *string
```

- *Type:* *string

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#visibility OauthClient#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthClientClientUriVerificationOutputReference <a name="OauthClientClientUriVerificationOutputReference" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/oauthclient"

oauthclient.NewOauthClientClientUriVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OauthClientClientUriVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() OauthClientClientUriVerification
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a>

---



