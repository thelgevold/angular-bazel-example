
import { Cmp9803Component } from './cmp';
describe('Cmp9803Component', () => {
  it('should add', () => {
    expect(new Cmp9803Component().add9803(1)).toBe(9804);
  });
});