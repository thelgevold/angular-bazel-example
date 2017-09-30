
import { Cmp6962Component } from './cmp';
describe('Cmp6962Component', () => {
  it('should add', () => {
    expect(new Cmp6962Component().add6962(1)).toBe(6963);
  });
});