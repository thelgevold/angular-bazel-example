
import { Cmp6804Component } from './cmp';
describe('Cmp6804Component', () => {
  it('should add', () => {
    expect(new Cmp6804Component().add6804(1)).toBe(6805);
  });
});