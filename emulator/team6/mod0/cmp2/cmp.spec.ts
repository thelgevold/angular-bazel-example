
import { Cmp4602Component } from './cmp';
describe('Cmp4602Component', () => {
  it('should add', () => {
    expect(new Cmp4602Component().add4602(1)).toBe(4603);
  });
});