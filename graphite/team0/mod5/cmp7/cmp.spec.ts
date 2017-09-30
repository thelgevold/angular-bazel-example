
import { Cmp6057Component } from './cmp';
describe('Cmp6057Component', () => {
  it('should add', () => {
    expect(new Cmp6057Component().add6057(1)).toBe(6058);
  });
});