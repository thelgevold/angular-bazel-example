
import { Cmp7232Component } from './cmp';
describe('Cmp7232Component', () => {
  it('should add', () => {
    expect(new Cmp7232Component().add7232(1)).toBe(7233);
  });
});