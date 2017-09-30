
import { Cmp6172Component } from './cmp';
describe('Cmp6172Component', () => {
  it('should add', () => {
    expect(new Cmp6172Component().add6172(1)).toBe(6173);
  });
});