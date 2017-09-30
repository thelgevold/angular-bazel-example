
import { Cmp3387Component } from './cmp';
describe('Cmp3387Component', () => {
  it('should add', () => {
    expect(new Cmp3387Component().add3387(1)).toBe(3388);
  });
});