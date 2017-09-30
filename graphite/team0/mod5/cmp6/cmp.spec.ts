
import { Cmp6056Component } from './cmp';
describe('Cmp6056Component', () => {
  it('should add', () => {
    expect(new Cmp6056Component().add6056(1)).toBe(6057);
  });
});