
import { Cmp7672Component } from './cmp';
describe('Cmp7672Component', () => {
  it('should add', () => {
    expect(new Cmp7672Component().add7672(1)).toBe(7673);
  });
});