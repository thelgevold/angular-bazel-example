
import { Cmp6635Component } from './cmp';
describe('Cmp6635Component', () => {
  it('should add', () => {
    expect(new Cmp6635Component().add6635(1)).toBe(6636);
  });
});