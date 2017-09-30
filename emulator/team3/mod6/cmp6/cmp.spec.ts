
import { Cmp4366Component } from './cmp';
describe('Cmp4366Component', () => {
  it('should add', () => {
    expect(new Cmp4366Component().add4366(1)).toBe(4367);
  });
});