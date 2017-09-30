
import { Cmp9154Component } from './cmp';
describe('Cmp9154Component', () => {
  it('should add', () => {
    expect(new Cmp9154Component().add9154(1)).toBe(9155);
  });
});