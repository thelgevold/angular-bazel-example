
import { Cmp9074Component } from './cmp';
describe('Cmp9074Component', () => {
  it('should add', () => {
    expect(new Cmp9074Component().add9074(1)).toBe(9075);
  });
});