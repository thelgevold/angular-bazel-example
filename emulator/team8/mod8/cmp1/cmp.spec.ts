
import { Cmp4881Component } from './cmp';
describe('Cmp4881Component', () => {
  it('should add', () => {
    expect(new Cmp4881Component().add4881(1)).toBe(4882);
  });
});