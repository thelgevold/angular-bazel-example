
import { Cmp6568Component } from './cmp';
describe('Cmp6568Component', () => {
  it('should add', () => {
    expect(new Cmp6568Component().add6568(1)).toBe(6569);
  });
});