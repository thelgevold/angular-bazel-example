
import { Cmp2609Component } from './cmp';
describe('Cmp2609Component', () => {
  it('should add', () => {
    expect(new Cmp2609Component().add2609(1)).toBe(2610);
  });
});