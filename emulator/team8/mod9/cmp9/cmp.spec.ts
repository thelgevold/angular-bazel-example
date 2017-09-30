
import { Cmp4899Component } from './cmp';
describe('Cmp4899Component', () => {
  it('should add', () => {
    expect(new Cmp4899Component().add4899(1)).toBe(4900);
  });
});