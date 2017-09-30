
import { Cmp7617Component } from './cmp';
describe('Cmp7617Component', () => {
  it('should add', () => {
    expect(new Cmp7617Component().add7617(1)).toBe(7618);
  });
});