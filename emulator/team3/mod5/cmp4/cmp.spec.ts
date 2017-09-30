
import { Cmp4354Component } from './cmp';
describe('Cmp4354Component', () => {
  it('should add', () => {
    expect(new Cmp4354Component().add4354(1)).toBe(4355);
  });
});