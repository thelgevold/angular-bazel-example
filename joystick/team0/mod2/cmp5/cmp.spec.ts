
import { Cmp9025Component } from './cmp';
describe('Cmp9025Component', () => {
  it('should add', () => {
    expect(new Cmp9025Component().add9025(1)).toBe(9026);
  });
});