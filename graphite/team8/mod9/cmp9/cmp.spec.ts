
import { Cmp6899Component } from './cmp';
describe('Cmp6899Component', () => {
  it('should add', () => {
    expect(new Cmp6899Component().add6899(1)).toBe(6900);
  });
});