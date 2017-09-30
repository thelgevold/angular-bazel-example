
import { Cmp4470Component } from './cmp';
describe('Cmp4470Component', () => {
  it('should add', () => {
    expect(new Cmp4470Component().add4470(1)).toBe(4471);
  });
});