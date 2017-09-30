
import { Cmp4822Component } from './cmp';
describe('Cmp4822Component', () => {
  it('should add', () => {
    expect(new Cmp4822Component().add4822(1)).toBe(4823);
  });
});