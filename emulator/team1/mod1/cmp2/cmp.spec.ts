
import { Cmp4112Component } from './cmp';
describe('Cmp4112Component', () => {
  it('should add', () => {
    expect(new Cmp4112Component().add4112(1)).toBe(4113);
  });
});