
import { Cmp9023Component } from './cmp';
describe('Cmp9023Component', () => {
  it('should add', () => {
    expect(new Cmp9023Component().add9023(1)).toBe(9024);
  });
});