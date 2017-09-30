
import { Cmp6470Component } from './cmp';
describe('Cmp6470Component', () => {
  it('should add', () => {
    expect(new Cmp6470Component().add6470(1)).toBe(6471);
  });
});