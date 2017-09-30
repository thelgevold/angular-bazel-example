
import { Cmp6802Component } from './cmp';
describe('Cmp6802Component', () => {
  it('should add', () => {
    expect(new Cmp6802Component().add6802(1)).toBe(6803);
  });
});