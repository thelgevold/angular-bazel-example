
import { Cmp6451Component } from './cmp';
describe('Cmp6451Component', () => {
  it('should add', () => {
    expect(new Cmp6451Component().add6451(1)).toBe(6452);
  });
});