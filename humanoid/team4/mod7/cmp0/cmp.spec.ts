
import { Cmp7470Component } from './cmp';
describe('Cmp7470Component', () => {
  it('should add', () => {
    expect(new Cmp7470Component().add7470(1)).toBe(7471);
  });
});